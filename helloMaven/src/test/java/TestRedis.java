import org.junit.jupiter.api.Test;
import top.yaovan.redis.RedisHelper;
import top.yaovan.transactional.User;

import java.io.Serializable;

public class TestRedis {


    @Test
    public void testSaveObject(){
        User o1 = new User();
        RedisHelper.setHObject("o","1",o1);
    }

    @Test
    public void testLoadObject(){
        User o1 = RedisHelper.getHObject("o","1");
        System.out.println(o1);
    }
}
