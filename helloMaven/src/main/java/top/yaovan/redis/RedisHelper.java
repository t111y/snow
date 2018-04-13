package top.yaovan.redis;

import redis.clients.jedis.Jedis;

import java.util.*;

public class RedisHelper extends RedisProvider {

    /**
     * Set the string value as value of the key. Default settings at save
     * time(2000s)
     *
     * @param key
     * @param value
     * @return
     */
    public static String set(String key, String value) {
        Jedis jedis = null;
        String rtn = null;
        try {
            jedis = getJedis();
            rtn = jedis.setex(key, EXPIRE, value);
        } catch (Exception e) {
            LOG.error(ExceptionUtil.getTrace(e));
        } finally {
            returnResource(jedis);
        }
        return rtn;
    }

    public static String set2(String key, String value) {
        Jedis jedis = null;
        String rtn = null;
        try {
            jedis = getJedis();
            rtn = jedis.setex(key, 360000, value);
        } catch (Exception e) {
            LOG.error(ExceptionUtil.getTrace(e));
        } finally {
            returnResource(jedis);
        }
        return rtn;
    }

    /**
     * Get the value of the specified key.
     *
     * @param key
     * @return
     */
    public static String get(String key) {
        Jedis jedis = null;
        String rtn = null;
        try {
            jedis = getJedis();
            rtn = jedis.get(key);
        } catch (Exception e) {
            LOG.error(ExceptionUtil.getTrace(e));
        } finally {
            returnResource(jedis);
        }
        return rtn;
    }

    /**
     * Get the values of all the specified keys
     *
     * @param keys
     * @return
     */
    public static List<String> mget(String... keys) {
        Jedis jedis = null;
        List<String> rtn = new ArrayList<String>();
        try {
            jedis = getJedis();
            rtn = jedis.mget(keys);
        } catch (Exception e) {
            LOG.error(ExceptionUtil.getTrace(e));
        } finally {
            returnResource(jedis);
        }
        return rtn;
    }

    /**
     * Set the the respective keys to the respective values.
     *
     * @param keysvalues
     * @return
     */
    public static String mset(String... keysvalues) {
        Jedis jedis = null;
        String rtn = null;
        try {
            jedis = getJedis();
            rtn = jedis.mset(keysvalues);
        } catch (Exception e) {
            LOG.error(ExceptionUtil.getTrace(e));
        } finally {
            returnResource(jedis);
        }
        return rtn;
    }

    /**
     * Return all the fields and associated values in a hash.
     *
     * @param key
     * @return
     */
    public static Map<String, String> hgetall(String key) {
        Jedis jedis = null;
        Map<String, String> rtn = new HashMap<>();
        try {
            jedis = getJedis();
            rtn = jedis.hgetAll(key);
        } catch (Exception e) {
            LOG.error(ExceptionUtil.getTrace(e));
        } finally {
            returnResource(jedis);
        }
        return rtn;
    }

    /**
     * Set the specified hash field to the specified value.
     *
     * @param key
     * @param field
     * @param value
     * @return
     */
    public static Long hset(String key, String field, String value) {

        Jedis jedis = null;
        Long rtn = null;
        try {
            jedis = getJedis();
            rtn = jedis.hset(key, field, value);
            jedis.expire(key, EXPIRE);
        } catch (Exception e) {
            LOG.error(ExceptionUtil.getTrace(e));
        } finally {
            returnResource(jedis);
        }
        return rtn;
    }

    /**
     * 以map形式存放对象.
     *
     * @param key
     * @param field
     * @param obj
     * @return
     */
    public static long setHObject(String key, String field, Object obj) {
        Jedis jedis = null;
        Long rtn = null;
        try {
            jedis = getJedis();
            rtn = jedis.hset(key.getBytes(), field.getBytes(),
                    ObjectsSerialize.serialize(obj));
        } catch (Exception e) {
//            LOG.error(ExceptionUtil.getTrace(e));
        } finally {
            returnResource(jedis);
        }
        return rtn;
    }

    /**
     * 获取对象.
     *
     * @param key
     * @param field
     * @return
     */
    public static <M> M getHObject(String key, String field) {
        Jedis jedis = null;
        byte[] rtn = null;
        try {
            jedis = getJedis();
            rtn = jedis.hget(key.getBytes(), field.getBytes());
        } catch (Exception e) {
            LOG.error(ExceptionUtil.getTrace(e));
        } finally {
            returnResource(jedis);
        }
        return ObjectsSerialize.deserialize(rtn);
    }
    public static long delHObject(String key, String field) {
        Jedis jedis = null;
        long rtn = 0;
        try {
            jedis = getJedis();
            rtn = jedis.hdel(key.getBytes(), field.getBytes());
        } catch (Exception e) {
            LOG.error(ExceptionUtil.getTrace(e));
        } finally {
            returnResource(jedis);
        }
        return rtn;
    }

    public static void setSObject(String key, Object obj) {
        Jedis jedis = null;
        try {
            jedis = getJedis();
            jedis.sadd(key.getBytes(), ObjectsSerialize.serialize(obj));
            jedis.expire(key.getBytes(), EXPIRE);
        } catch (Exception e) {
            LOG.error(ExceptionUtil.getTrace(e));
        } finally {
            returnResource(jedis);
        }
    }

    public static <M> List<M> getHAllObject(String key) {
        List<M> list = new ArrayList();
        Jedis jedis = null;
        try {
            jedis = getJedis();
            Collection<byte[]> set = jedis.hgetAll(key.getBytes()).values();
            if (set != null && !set.isEmpty()) {
                Iterator<byte[]> it = set.iterator();
                for (; it.hasNext(); ) {
                    byte[] b = it.next();
                    M obj = ObjectsSerialize.deserialize(b);
                    list.add(obj);
                }
            }
        } catch (Exception e) {
            LOG.error(ExceptionUtil.getTrace(e));
        } finally {
            returnResource(jedis);
        }
        return list;
    }
    public static <M> List<M> getSAllObject(String key) {
        List<M> list = new ArrayList();
        Jedis jedis = null;
        try {
            jedis = getJedis();
            Set<byte[]> set = jedis.smembers(key.getBytes());
            if (set != null && !set.isEmpty()) {
                Iterator<byte[]> it = set.iterator();
                for (; it.hasNext(); ) {
                    byte[] b = it.next();
                    M obj = ObjectsSerialize.deserialize(b);
                    list.add(obj);
                }
            }
        } catch (Exception e) {
            LOG.error(ExceptionUtil.getTrace(e));
        } finally {
            returnResource(jedis);
        }
        return list;
    }
    public static void delAllObject(String key) {
        Jedis jedis = null;
        try {
            jedis = getJedis();
            jedis.del(key.getBytes());
        } catch (Exception e) {
            LOG.error(ExceptionUtil.getTrace(e));
        } finally {
            returnResource(jedis);
        }
    }

    public static Long hset2(String key, String field, String value) {

        Jedis jedis = null;
        Long rtn = null;
        try {
            jedis = getJedis();
            rtn = jedis.hset(key, field, value);
        } catch (Exception e) {
            LOG.error(ExceptionUtil.getTrace(e));
        } finally {
            returnResource(jedis);
        }
        return rtn;
    }

    public static void hdel2(String key) {
        Jedis jedis = null;
        try {
            jedis = getJedis();
            jedis.del(key);
        } catch (Exception e) {
            LOG.error(ExceptionUtil.getTrace(e));
        } finally {
            returnResource(jedis);
        }
    }

    public static void flush() {
        Jedis jedis = null;
        jedis = getJedis();
        jedis.flushAll();
    }

    public static String hget(String key, String field) {

        Jedis jedis = null;
        String rtn = null;
        try {
            jedis = getJedis();
            rtn = jedis.hget(key, field);
        } catch (Exception e) {
            LOG.error(ExceptionUtil.getTrace(e));
        } finally {
            returnResource(jedis);
        }
        return rtn;
    }

    public static long hdel(String key, String[] field) {
        Jedis jedis = null;
        Long rtn = null;
        try {
            jedis = getJedis();
            rtn = jedis.hdel(key, field);
        } catch (Exception e) {
            LOG.error(ExceptionUtil.getTrace(e));
        } finally {
            returnResource(jedis);
        }
        return rtn;
    }

    public static long mdel(String[] key) {
        Jedis jedis = null;
        Long rtn = null;
        try {
            jedis = getJedis();
            rtn = jedis.del(key);
        } catch (Exception e) {
            LOG.error(ExceptionUtil.getTrace(e));
        } finally {
            returnResource(jedis);
        }
        return rtn;
    }

    /**
     * 设置分布式锁
     *
     * @param key
     * @param value
     * @return
     */
    public static long setLock(String key, String value) {
        Jedis jedis = null;
        Long rtn = null;
        try {
            jedis = getJedis();
            rtn = jedis.setnx(key, value);
            jedis.expire(key, EXPIRE);
        } catch (Exception e) {
            LOG.error(ExceptionUtil.getTrace(e));
        } finally {
            returnResource(jedis);
        }
        return rtn;
    }

    /**
     * 释放锁
     *
     * @param key
     * @return
     */
    public static long delLock(String key) {
        Jedis jedis = null;
        Long rtn = null;
        try {
            jedis = getJedis();
            rtn = jedis.del(key);
        } catch (Exception e) {
            LOG.error(ExceptionUtil.getTrace(e));
        } finally {
            returnResource(jedis);
        }
        return rtn;
    }

    /**
     * 存储子调用链的list
     *
     * @param dateKey
     * @param cid
     */
    public static void memoryCid(String dateKey, String cid) {
        Jedis jedis = null;
        try {
            jedis = getJedis();
            jedis.sadd(dateKey, cid);
            jedis.expire(dateKey, EXPIRE);
        } catch (Exception e) {
            System.out.println(ExceptionUtil.getTrace(e));
            LOG.error(ExceptionUtil.getTrace(e));
        } finally {
            returnResource(jedis);
        }
    }

    /**
     * 获取调用链list
     *
     * @param dateKey
     * @return
     */
    public static Set<String> getAllCids(String dateKey) {
        Jedis jedis = null;
        Set<String> set = null;
        try {
            jedis = getJedis();
            set = jedis.smembers(dateKey);
        } catch (Exception e) {
            System.out.println(ExceptionUtil.getTrace(e));
            LOG.error(ExceptionUtil.getTrace(e));
        } finally {
            returnResource(jedis);
        }
        return set;
    }

}
