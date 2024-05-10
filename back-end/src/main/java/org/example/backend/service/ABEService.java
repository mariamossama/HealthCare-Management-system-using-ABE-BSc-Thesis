package org.example.backend.service;

import org.python.core.PyObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.python.util.PythonInterpreter;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Map;

@Service
public class ABEService {
    private static final String AES_ALGORITHM = "AES";
    @Autowired
    private KeyGenerationService keyGenerationService;
    
    public byte[] encryptData(byte[] data, Map<String, String> attributes) {
        StringBuilder ciphertextBuilder = new StringBuilder();
        ciphertextBuilder.append(new String(data));
        for (Map.Entry<String, String> entry : attributes.entrySet()) {
            ciphertextBuilder.append(entry.getKey()).append(":").append(entry.getValue()).append(";");
        }
        String ciphertext = ciphertextBuilder.toString();
        return ciphertext.getBytes();
    }

    public void validateAccessibility(byte[] encryptedData, Map<String, String> attributes, byte[] decryptionKey) {
        String decryptionKeyString = new String(decryptionKey);
        String[] requiredAttributes = decryptionKeyString.split(":");
        for (String attribute : requiredAttributes) {
            if (!attributes.containsKey(attribute)) {
                throw new IllegalArgumentException("Decryption key does not satisfy access policy");
            }
            break;
        }
    }

    public PyObject generatePublicKey() {
        try {
            PythonInterpreter interpreter = new PythonInterpreter();
            interpreter.execfile("/org/example/backend/service/ABYService.py");
            PyObject publicKeyFunction = interpreter.get("generate_public_key");
            return publicKeyFunction.__call__(); // Call the function and return the result
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public String encryptSomeDate(String plainText, String[] attribute) throws Exception {
        try {
            String[] command = {"python", "path/to/encrypt_data.py", plainText, String.join(",", attribute)};
            ProcessBuilder pb = new ProcessBuilder(command);
            Process process = pb.start();
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            String encryptedData = reader.readLine();
            process.waitFor();

            return encryptedData;
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
            throw new Exception(e);
        }
    }
}
