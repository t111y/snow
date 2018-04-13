import org.junit.jupiter.api.Test;
import top.yaovan.redis.ObjectsSerialize;
import top.yaovan.redis.ProtostuffUtil;

import java.util.ArrayList;
import java.util.List;

public class TestProtos {
    public static void init(){
//        ProtostuffUtil.
    }
    @Test
    public void testSerializerSize(){
        TestUser user1 = new TestUser();
//        user1.setName("lily");
//        user1.setAge(22);
        byte[] bs = ProtostuffUtil.serialize(user1,TestUser.class.getName());
        TestUser o1 = ProtostuffUtil.deserialize(bs,TestUser.class.getName());
        System.out.println(bs.length);
        System.out.println(ProtostuffUtil.serialize(new TestUser2(),TestUser2.class.getName()).length);
        System.out.println(ProtostuffUtil.serialize(new TestUser3(),TestUser3.class.getName()).length);
        System.out.println(ProtostuffUtil.serialize(new TestUser4(),TestUser4.class.getName()).length);
    }
    @Test
    public void testSerializerList(){
        List<TestUser> users = buildTestData();
        byte[] bs = ProtostuffUtil.serializeList(users);
        List<TestUser> us = ProtostuffUtil.deserializeList(bs,TestUser.class);


        byte[] bs1 = ObjectsSerialize.serialize(users);
        List<TestUser> us1 = ObjectsSerialize.deserialize(bs1);

        System.out.println(bs.length);
    }
    private List<TestUser> buildTestData() {


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
}
