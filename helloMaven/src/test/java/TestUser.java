import java.io.Serializable;

public class TestUser implements Serializable {
    private static final long serialVersionUID = 1L;

    private String name="33";
    private String abcdefg="111111999999";
    private int age=55;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

}