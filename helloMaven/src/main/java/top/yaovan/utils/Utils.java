package top.yaovan.utils;

import java.security.MessageDigest;
import java.util.UUID;

public class Utils {
    public static String toMd5_16(String src) {
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");
            byte[] bytes = md.digest(src.getBytes("utf-8"));
            return hexToString(bytes);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "";
    }

    static final char[] HEX_DIGITS = "0123456789ABCDEF".toCharArray();
    private static String hexToString(byte[] bytes) {
        int count = 8;
        StringBuilder ret = new StringBuilder(count * 2);
        for (int i = 5; i < 13; i++) {
            ret.append(HEX_DIGITS[(bytes[i] >> 4) & 0x0f]);
            ret.append(HEX_DIGITS[bytes[i] & 0x0f]);
        }
        return ret.toString();
    }

    public static String getUUID(){
        UUID uuid=UUID.randomUUID();
        String str = uuid.toString();
        String uuidStr=str.replace("-", "");
        return uuidStr;
    }
}
