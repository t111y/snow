package top.yaovan;


import java.io.Serializable;

public class TestObject implements Serializable {
    public TestObject(){

    }
    public int a;
    public String b;
    public static TestObject create(int a,String b){
        TestObject o = new TestObject();
        o.a = a;
        o.b = b;
        return o;
    }
}
