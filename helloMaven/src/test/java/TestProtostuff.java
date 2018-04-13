import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import top.yaovan.redis.ProtostuffUtil;
import top.yaovan.redis.RedisHelper;
import top.yaovan.transactional.User;

public class TestProtostuff {
    @BeforeAll
    public static void init(){
        ProtostuffUtil.addSchema(User.class);
    }
    @Test
    public void testProtostuffSave(){
        User user = new User();
        user.a = 101;
        byte[] bs = ProtostuffUtil.serialize(user,User.class.getName());
        RedisHelper.getJedis().hset("1".getBytes(),"1".getBytes(),bs);
    }
    @Test
    public void testProtostuffLoad(){
        byte[] bs =RedisHelper.getJedis().hget("1".getBytes(),"1".getBytes());
        User user = ProtostuffUtil.deserialize(bs,User.class.getName());
        System.out.println(user);
    }
}
