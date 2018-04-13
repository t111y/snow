import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.alibaba.fastjson.JSON;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import top.yaovan.redis.ObjectsSerialize;
import top.yaovan.redis.ProtostuffUtil;

/**
 * @author Josh Wang(Sheng)
 * @email josh_wang23@hotmail.com
 */
public class TestSerializerTranscoder implements Serializable {

    private static final long serialVersionUID = -1941046831377985500L;

    @BeforeAll
    public static void testSerializerTranscoder() {
        ProtostuffUtil.addSchema(TestUser.class);
        ProtostuffUtil.addSchema(TestUser2.class);
        ProtostuffUtil.addSchema(TestUser3.class);
        ProtostuffUtil.addSchema(TestUser4.class);
    }

//    @Test
    public void testObject() {
        List<TestUser> lists = buildTestData();

        TestUser userA = lists.get(0);

        byte[] result1 = ObjectsSerialize.serialize(userA);

        TestUser userA_userA = ObjectsSerialize.deserialize(result1);

        System.out.println(userA_userA.getName() + "\t" + userA_userA.getAge());
    }

    @Test
    public void testList() {
        List<TestUser> lists = buildTestData();
        byte[] bs;
        List<TestUser> ls;
        long t = System.currentTimeMillis();
        bs = JSON.toJSONString(lists).getBytes();
        long t1 = System.currentTimeMillis();
        ls = JSON.parseArray(new String(bs),TestUser.class);
        long t2 = System.currentTimeMillis();
        long t3 = System.currentTimeMillis();
        bs = ProtostuffUtil.serializeList(lists);
        long t4 = System.currentTimeMillis();
        ls = ProtostuffUtil.deserializeList(bs, TestUser.class);
        long t5 = System.currentTimeMillis();
        bs = ObjectsSerialize.serialize(lists);
        long t6 = System.currentTimeMillis();
        ls = ObjectsSerialize.deserialize(bs);
        long t7 = System.currentTimeMillis();

        System.out.println("fastjson");
        System.out.println(t1 - t);
        System.out.println(t2 - t1);
//        System.out.println(t3 - t2);
        System.out.println("ProtostuffUtil");
        System.out.println(t4 - t3);
        System.out.println(t5 - t4);
        System.out.println("ObjectsSerialize");
        System.out.println(t6 - t5);
        System.out.println(t7 - t6);
    }

    private static List<TestUser> buildTestData() {
        List<TestUser> list = new ArrayList<>();
        for (int i = 0; i < 1000; i++) {
            TestUser userA = new TestUser();
            userA.setName("lily");
            userA.setAge(i);
            TestUser userB = new TestUser();
            userB.setName("Josh Wang");
            userB.setAge(i);
            list.add(userA);
            list.add(userB);
        }

        return list;
    }

    @Test
    public void testSerializerSize(){
        TestUser user1 = new TestUser();
        user1.setName("lily");
        user1.setAge(22);
        TestUser2 user2 = new TestUser2();
        user2.setName("lily");
        user2.setAge(22);
        TestUser3 user3 = new TestUser3();
        user3.setName("lily");
        user3.setAge(22);
        TestUser4 user4 = new TestUser4();
        user4.setName("lily");
        user4.setAge(22);

        byte[] l1 = ObjectsSerialize.serialize(user1);
        byte[] l2 = ObjectsSerialize.serialize(user2);
        byte[] l3 = ObjectsSerialize.serialize(user3);
        byte[] l4 = ObjectsSerialize.serialize(user4);

        String s1 = new String(l1);
        String s2 = new String(l2);
        String s3 = new String(l3);
        String s4 = new String(l4);
        System.out.println(s1);
        System.out.println(s2);
        System.out.println(s3);
        System.out.println(s4);
    }
}