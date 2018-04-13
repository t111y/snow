import org.junit.jupiter.api.Test;
import org.springframework.util.Assert;
import top.yaovan.redis.RedisHelper;
import top.yaovan.transactional.User;

import java.util.HashSet;
import java.util.Set;

public class TestSet {
    private Set<Integer> a = new HashSet<>();
    @Test
    public void t1(){
        a.add(1);
        a.add(1);
        Assert.isTrue(a.size()==1);
    }

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
