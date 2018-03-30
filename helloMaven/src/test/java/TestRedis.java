import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import redis.clients.jedis.Jedis;
import top.yaovan.redis.RedisProvider;

public class TestRedis {
    private Jedis jedis;
    private String listKey = "testList";
    private String value = "listKey";
    @Before
    public void testConnectRedis(){
        jedis =  RedisProvider.getJedis();
        System.out.println(jedis.get("hello"));
        Assert.assertNotNull(jedis);
    }
    @Test
    public void testLPush(){
        jedis.rpush(listKey,value);
        jedis.rpush(listKey,value+1);
        out();
    }

    public void out(){
        System.out.println(jedis.lrange(listKey,0,-1));
    }
}
