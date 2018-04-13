import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import top.yaovan.aop.AopAppContext;

public class TestSchedul {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(AopAppContext.class);

    }
}
