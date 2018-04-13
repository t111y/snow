import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import top.yaovan.aop.AopAppContext;
import top.yaovan.aop.PersonServer;

/**
 *
 */
public class TestAop {
    private static ApplicationContext context;

    @BeforeAll
    public static void init() {
        context = new AnnotationConfigApplicationContext(AopAppContext.class);

    }

    @Test
    public void testAop() {
        PersonServer server = context.getBean(PersonServer.class);
        server.save("abc");
//        try {
//            server.getPersonName(1);
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//        server.update("def", 1);
    }
}
