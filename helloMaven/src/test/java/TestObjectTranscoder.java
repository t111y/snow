import org.junit.Before;
import org.junit.Test;
import top.yaovan.ObjectTranscoder;
import top.yaovan.TestObject;
import top.yaovan.redis.ListTranscoder;

import java.util.*;

public class TestObjectTranscoder {
    private List<TestObject> list;
    private Map<String,TestObject> map;

    ListTranscoder<TestObject> listTranscoder = new ListTranscoder<>();
    @Before
    public void init(){
        list = new ArrayList<>();

        map = new LinkedHashMap<>();
        for (int i = 0; i < 100; i++) {
            list.add(TestObject.create(i,i+"1"));
            map.put(i+"",TestObject.create(i,i+"1"));
        }
    }
    @Test
    public void testList(){

        long t = System.currentTimeMillis();
        byte[] result1 = listTranscoder.serialize(list);
        list = listTranscoder.deserialize(result1);

        long t0 = System.currentTimeMillis();
        byte[] bs = ObjectTranscoder.serialize(list);
        System.out.println(bs.length);
        long t1 = System.currentTimeMillis();
        List<TestObject> is = ObjectTranscoder.deserializeList(bs);
        long t2 = System.currentTimeMillis();
        bs = ObjectTranscoder.serialize(map);
        System.out.println(bs.length);
        long t3 = System.currentTimeMillis();

        Map<String,Integer> hashMap = ObjectTranscoder.deserialize(bs);
        long t4 = System.currentTimeMillis();


        result1 = listTranscoder.serialize(list);
        long t5 = System.currentTimeMillis();
        list = listTranscoder.deserialize(result1);
        long t6 = System.currentTimeMillis();

        System.out.println(t0-t);
        System.out.println(t1-t0);
        System.out.println(t2-t1);
        System.out.println(t3-t2);
        System.out.println(t4-t3);
        System.out.println(t5-t4);
        System.out.println(t6-t5);
    }
}
