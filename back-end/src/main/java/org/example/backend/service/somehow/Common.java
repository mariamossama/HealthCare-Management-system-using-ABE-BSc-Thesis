package org.example.backend.service.somehow;
import java.io.ByteArrayOutputStream;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;

import org.example.backend.entity.Patient;

public class Common {

	public static byte[][] readCpabeDataFromByteArray(byte[] data) {
		int i, len, pos = 0;
		byte[][] res = new byte[2][];
		byte[] aesBuf, cphBuf;
	
		// Read AES buffer length
		len = 0;
		for (i = 3; i >= 0; i--) {
			len |= (data[pos] & 0xFF) << (i * 8);
			pos++;
		}
		aesBuf = new byte[len];
		System.arraycopy(data, pos, aesBuf, 0, len);
		pos += len;
	
		// Read CPH buffer length
		len = 0;
		for (i = 3; i >= 0; i--) {
			len |= (data[pos] & 0xFF) << (i * 8);
			pos++;
		}
		cphBuf = new byte[len];
		System.arraycopy(data, pos, cphBuf, 0, len);
	
		res[0] = aesBuf;
		res[1] = cphBuf;
		return res;
	}

	/* read byte[] from inputfile */
	public static byte[] suckFile(String inputfile) throws IOException {
		InputStream is = new FileInputStream(inputfile);
		int size = is.available();
		System.out.println(size);
		byte[] content = new byte[size];

		is.read(content);

		is.close();
		return content;
	}


	/*read byte[] from plain text */
	public static byte[] convertToByteArray(String inputText) {
    // Optionally specify a charset if needed, for example, StandardCharsets.UTF_8
    byte[] content = inputText.getBytes(StandardCharsets.UTF_8);
    System.out.println("Size of input text in bytes: " + content.length);
    return content;
	}

	/* write byte[] into outputfile */
	public static void spitFile(String outputfile, byte[] b) throws IOException {
		OutputStream os = new FileOutputStream(outputfile);
		os.write(b);
		os.close();
	}

	//encrypt and store as an bytearray to be stored in patien't entity 
	public static void createCpabeData(Patient p , byte[] cphBuf, byte[] aesBuf) throws IOException {
		ByteArrayOutputStream os = new ByteArrayOutputStream();
	
		/* write aes_buf with size prepended */
		for (int i = 3; i >= 0; i--)
			os.write((aesBuf.length & (0xff << 8 * i)) >> 8 * i);
		os.write(aesBuf);
	
		/* write cph_buf with size prepended */
		for (int i = 3; i >= 0; i--)
			os.write((cphBuf.length & (0xff << 8 * i)) >> 8 * i);
		os.write(cphBuf);
	
		byte[] encryptedData = os.toByteArray();
		os.close();  // Close the ByteArrayOutputStream
		p.setEncryptedData(encryptedData); 
	}

	public static void writeCpabeFile(String encfile,
			byte[] cphBuf, byte[] aesBuf) throws IOException {
		int i;
		OutputStream os = new FileOutputStream(encfile);

		/* write aes_buf */
		for (i = 3; i >= 0; i--)
			os.write(((aesBuf.length & (0xff << 8 * i)) >> 8 * i));
		os.write(aesBuf);

		/* write cph_buf */
		for (i = 3; i >= 0; i--)
			os.write(((cphBuf.length & (0xff << 8 * i)) >> 8 * i));
		os.write(cphBuf);

		os.close();

	}

	public static byte[][] readCpabeFile(String encfile) throws IOException {
		int i, len;
		InputStream is = new FileInputStream(encfile);
		byte[][] res = new byte[2][];
		byte[] aesBuf, cphBuf;

		/* read aes buf */
		len = 0;
		for (i = 3; i >= 0; i--)
			len |= is.read() << (i * 8);
		aesBuf = new byte[len];

		is.read(aesBuf);

		/* read cph buf */
		len = 0;
		for (i = 3; i >= 0; i--)
			len |= is.read() << (i * 8);
		cphBuf = new byte[len];

		is.read(cphBuf);

		is.close();

		res[0] = aesBuf;
		res[1] = cphBuf;
		return res;
	}
	/**
	 * Return a ByteArrayOutputStream instead of writing to a file
	 */
	public static ByteArrayOutputStream writeCpabeData(byte[] mBuf,
			byte[] cphBuf, byte[] aesBuf) throws IOException {
		int i;
		ByteArrayOutputStream os = new ByteArrayOutputStream();
		/* write m_buf */
		for (i = 3; i >= 0; i--)
			os.write(((mBuf.length & (0xff << 8 * i)) >> 8 * i));
		os.write(mBuf);

		/* write aes_buf */
		for (i = 3; i >= 0; i--)
			os.write(((aesBuf.length & (0xff << 8 * i)) >> 8 * i));
		os.write(aesBuf);

		/* write cph_buf */
		for (i = 3; i >= 0; i--)
			os.write(((cphBuf.length & (0xff << 8 * i)) >> 8 * i));
		os.write(cphBuf);

		os.close();
		return os;
	}
	/**
	 * Read data from an InputStream instead of taking it from a file.
	 */
	public static byte[][] readCpabeData(InputStream is) throws IOException {
		int i, len;
		
		byte[][] res = new byte[3][];
		byte[] mBuf, aesBuf, cphBuf;

		/* read m buf */
		len = 0;
		for (i = 3; i >= 0; i--)
			len |= is.read() << (i * 8);
		mBuf = new byte[len];
		is.read(mBuf);
		/* read aes buf */
		len = 0;
		for (i = 3; i >= 0; i--)
			len |= is.read() << (i * 8);
		aesBuf = new byte[len];
		is.read(aesBuf);

		/* read cph buf */
		len = 0;
		for (i = 3; i >= 0; i--)
			len |= is.read() << (i * 8);
		cphBuf = new byte[len];
		is.read(cphBuf);

		is.close();
		res[0] = aesBuf;
		res[1] = cphBuf;
		res[2] = mBuf;
		return res;
	}
}
