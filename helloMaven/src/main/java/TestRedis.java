import redis.clients.jedis.Jedis;
import top.yaovan.redis.RedisProvider;

public class TestRedis {
    public TestRedis(){
        Jedis jedis =  RedisProvider.getJedis();

    }
}
