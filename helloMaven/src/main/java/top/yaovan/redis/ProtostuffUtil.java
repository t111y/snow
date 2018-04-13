package top.yaovan.redis;

import io.protostuff.LinkedBuffer;
import io.protostuff.ProtostuffIOUtil;
import io.protostuff.Schema;
import io.protostuff.runtime.RuntimeSchema;

import java.nio.ByteBuffer;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ProtostuffUtil {
    private static Map<String,Schema> schemaMap = new HashMap<>();
    private static Map<String,Class> claMap = new HashMap<>();
    public static void addSchema(Class cla){
        schemaMap.put(cla.getName(),RuntimeSchema.getSchema(cla));
        claMap.put(cla.getName(),cla);
    }
    public static <T> byte[] serializeList(List<T> list) {
        if (list == null || list.size() <= 0) {
            return null;
        }

        List<byte[]> bytes = new ArrayList<>();
        Schema schema = schemaMap.get(list.get(0).getClass().getName());
        LinkedBuffer buffer = LinkedBuffer.allocate(4096);
        byte[] protostuff = null;
        int len = 0;
        for (T p : list) {
            try {
                protostuff = ProtostuffIOUtil.toByteArray(p, schema, buffer);
                len += 4 + protostuff.length;
                bytes.add(protostuff);
            } finally {
                buffer.clear();
            }
        }
        ByteBuffer outputStream = ByteBuffer.allocate(len);
        for (byte[] bs : bytes) {
            try {
                outputStream.putInt(bs.length);
                outputStream.put(bs);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return outputStream.array();
    }

    public static <T> List deserializeList(byte[] bytes, Class<T> clazz) {
        if (bytes == null || bytes.length <= 0) {
            return null;
        }
        Schema schema = schemaMap.get(clazz.getName());
        List<T> list = new ArrayList<>();
        ByteBuffer byteBuffer = ByteBuffer.wrap(bytes);
        int index = 0;
        while (byteBuffer.position() < byteBuffer.limit()) {
            T obj = null;
            try {
                obj = clazz.newInstance();
            } catch (InstantiationException e) {
                e.printStackTrace();
            } catch (IllegalAccessException e) {
                e.printStackTrace();
            }
            int size = byteBuffer.getInt();
            index += 4;
            ProtostuffIOUtil.mergeFrom(bytes, index, size, obj, schema);
            index += size;
            byteBuffer.position(index);
            list.add(obj);
        }
        return list;
    }


    public static byte[] serialize(Object obj, String claName) {
        if (obj == null) {
            return null;
        }
        Schema schema = schemaMap.get(claName);
        LinkedBuffer buffer = LinkedBuffer.allocate(4096);
        return ProtostuffIOUtil.toByteArray(obj, schema, buffer);
    }


    public static <T> T deserialize(byte[] bytes, String claName) {
        if (bytes == null) {
            return null;
        }
        Class cla = claMap.get(claName);
        Schema schema = schemaMap.get(claName);
        T obj = null;
        try {
            obj = (T)cla.newInstance();
        } catch (InstantiationException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        }
        ProtostuffIOUtil.mergeFrom(bytes, obj, schema);
        return obj;
    }

}
