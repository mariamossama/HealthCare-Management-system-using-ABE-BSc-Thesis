package org.example.backend.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

import java.security.NoSuchAlgorithmException;


import org.example.backend.service.somehow.Bswabe;
import org.example.backend.service.somehow.BswabeMsk;
import org.example.backend.service.somehow.BswabePrv;
import org.example.backend.service.somehow.BswabePub;
import org.example.backend.service.somehow.Common;

import org.example.backend.service.somehow.LangPolicy;
import org.example.backend.service.somehow.SerializeUtils;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;
//to be renamed to KeyManagementService
@Service
public class KeyGenerationService {
    @Value("${keymanagement.dir}")
    private String dir = "D:/thesis_check/back-end/src/main/java/org/example/backend/service/Demo/";

    private final String pubfile = dir + "pub_key";;
    private final String mskfile = dir + "master_key";
    private final String prvfile = dir + "prv_key";;


 

    @PostConstruct
    public void initializeKeys() throws IOException, NoSuchAlgorithmException {
        if (!Files.exists(Paths.get(pubfile)) || !Files.exists(Paths.get(mskfile))) {
            setup(pubfile, mskfile);
        } else {
            loadKeys();
        }
    }

    public void loadKeys() throws IOException {
        System.out.println("Loading existing keys.");
        BswabePub pub;
		BswabeMsk msk;
		byte[] pub_byte, msk_byte;

		/* get BswabePub from pubfile */
		pub_byte = Common.suckFile(pubfile);
		pub = SerializeUtils.unserializeBswabePub(pub_byte);
		System.out.println("public key :"+pub);
		/* get BswabeMsk from mskfile */
		msk_byte = Common.suckFile(mskfile);
		msk = SerializeUtils.unserializeBswabeMsk(pub, msk_byte);
		System.out.println("master key :"+msk);
    }
    

    private void setup(String pubfile, String mskfile) throws IOException {
        byte[] pub_byte, msk_byte;
		BswabePub pub = new BswabePub();
		BswabeMsk msk = new BswabeMsk();
		Bswabe.setup(pub, msk);

		/* store BswabePub into mskfile */
		pub_byte = SerializeUtils.serializeBswabePub(pub);
		Common.spitFile(pubfile, pub_byte);

		/* store BswabeMsk into mskfile */
		msk_byte = SerializeUtils.serializeBswabeMsk(msk);
		Common.spitFile(mskfile, msk_byte);

        System.out.println("Public and Master keys have been generated and stored.");
    }

    // public BswabePub generatePublicKey(String pubfile) throws NoSuchAlgorithmException, KeyManagementException {
    //     try {
    //         BswabePub pub;
    //         byte[] pub_byte = Common.suckFile(pubfile);
    //         pub = SerializeUtils.unserializeBswabePub(pub_byte);
    //         System.out.println("public Key: " + pub);
    //         return pub;
    //     } catch (IOException e) {
    //         throw new KeyManagementException("Failed to generate public key", e);
    //     }
    // }

	// public BswabeMsk generateMasterKey(String pubfile , String mskfile) throws NoSuchAlgorithmException, IOException, KeyManagementException 
	// {
	// 	byte[] msk_byte;
	// 	BswabeMsk msk;
	// 	BswabePub pub = this.generatePublicKey(pubfile);
	// 	/* get BswabePub from pubfile */
	// 	msk_byte = Common.suckFile(mskfile);
	// 	msk = SerializeUtils.unserializeBswabeMsk(pub, msk_byte);
	// 	 System.out.println("master Key: " + msk);
	// 	 return msk;
	// }
    public String getPubfile(){
        return pubfile;
    }

    public String getMskfile(){
        return mskfile;
    }

    public String keygen(String prvfile,
    String attr_str) throws NoSuchAlgorithmException, IOException {

        String pubfile = getPubfile();
        String mskfile = getMskfile();
        String user_prv_file = prvfile;
        BswabePub pub;
        BswabeMsk msk;
        byte[] pub_byte, msk_byte, prv_byte;

        /* get BswabePub from pubfile */
        pub_byte = Common.suckFile(pubfile);
        pub = SerializeUtils.unserializeBswabePub(pub_byte);
       // System.out.println(pub);
        /* get BswabeMsk from mskfile */
        msk_byte = Common.suckFile(mskfile);
        msk = SerializeUtils.unserializeBswabeMsk(pub, msk_byte);
        //System.out.println(msk);
        String[] attr_arr = LangPolicy.parseAttribute(attr_str);
        BswabePrv prv = Bswabe.keygen(pub, msk, attr_arr);

        // /* store BswabePrv into prvfile */
        prv_byte = SerializeUtils.serializeBswabePrv(prv);
        System.out.println(user_prv_file);
        Common.spitFile(user_prv_file, prv_byte);
        return user_prv_file;
    }

}
