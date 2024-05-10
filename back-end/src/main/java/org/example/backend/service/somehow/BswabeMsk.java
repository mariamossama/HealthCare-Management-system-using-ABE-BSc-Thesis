
package org.example.backend.service.somehow;
import it.unisa.dia.gas.jpbc.Element;

public class BswabeMsk {
	/*
	 * A master secret key
	 */
	public Element beta; /* Z_r */
	public Element g_alpha; /* G_2 */	
		@Override
    public String toString() {
        return "BswabeMsk{" +
               "beta=" + beta +
               ", g_alpha=" + g_alpha +
               '}';
    }
}
