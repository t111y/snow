package top.yaovan;

import top.yaovan.redis.LoggerUtils;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class ObjectTranscoder {
    @SuppressWarnings("unchecked")
    public static byte[] serialize(Object value) {
        if (value == null) {
            throw new NullPointerException("Can't serialize null");
        }
        byte[] rv = null;
        ByteArrayOutputStream bos = null;
        ObjectOutputStream os = null;
        try {
            bos = new ByteArrayOutputStream();
            os = new ObjectOutputStream(bos);
            os.writeObject(value);
            rv = bos.toByteArray();
        } catch (IOException e) {
            throw new IllegalArgumentException("Non-serializable object", e);
        } finally {
            close(bos);
            close(os);
        }
        return rv;
    }
    @SuppressWarnings("unchecked")
    public static <M> M deserialize(byte[] in) {
        Object rv = null;
        ByteArrayInputStream bis = null;
        ObjectInputStream is = null;
        try {
            if (in != null) {
                bis = new ByteArrayInputStream(in);
                is = new ObjectInputStream(bis);
                rv = is.readObject();
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            close(bis);
            close(is);
        }
        return (M) rv;
    }

    @SuppressWarnings("unchecked")
    public static <M extends Serializable> byte[] serialize(List<M> value) {
        if (value == null)
            throw new NullPointerException("Can't serialize null");

        List<M> values = (List<M>) value;

        byte[] results = null;
        ByteArrayOutputStream bos = null;
        ObjectOutputStream os = null;

        try {
            bos = new ByteArrayOutputStream();
            os = new ObjectOutputStream(bos);
            for (M m : values) {
                os.writeObject(m);
            }
            results = bos.toByteArray();
        } catch (IOException e) {
            throw new IllegalArgumentException("Non-serializable object", e);
        } finally {
            close(os);
            close(bos);
        }

        return results;
    }
    @SuppressWarnings("unchecked")
    public static <M> List<M> deserializeList(byte[] in) {
        if (in == null)
            throw new NullPointerException("Can't deserializeList null");
        List<M> list = new ArrayList<>();
        ByteArrayInputStream bis = null;
        ObjectInputStream is = null;
        try {
            bis = new ByteArrayInputStream(in);
            is = new ObjectInputStream(bis);
            while (is.available()>0) {
                M m = (M) is.readObject();
                list.add(m);
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            close(is);
            close(bis);
        }
        return list;
    }

    private static void close(Closeable closeable) {
        if (closeable != null) {
            try {
                closeable.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}