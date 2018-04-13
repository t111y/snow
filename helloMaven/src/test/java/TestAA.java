import org.junit.jupiter.api.Test;

public class TestAA {
    @Test
    public void test(){
        B b = new B();
        B.class.getDeclaringClass();
    }
}

class B<T>{

}

class C extends B<Integer>{

}
