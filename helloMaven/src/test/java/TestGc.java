import org.junit.jupiter.api.Test;

public class TestGc {
    private Object instance = null;
    private static final int _1MB = 1024 * 1024*5;

    /** 这个成员属性唯一的作用就是占用一点内存 */
    private byte[] bigSize = new byte[2 * _1MB];

    @Test
    public void testGc(){
        TestGc objectA = new TestGc();
//        TestGc objectB = new TestGc();
//        objectA.instance = objectB;
//        objectB.instance = objectA;
//        objectA = null;
//        objectB = null;

        System.gc();
    }

}
