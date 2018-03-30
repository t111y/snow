import org.junit.Test;

public class TestString {

    @Test
    public void testFormat(){
        String string = "a%s%s";
        System.out.println(String.format(string,1,2));
    }
}
