package top.yaovan.mysql;

import java.lang.annotation.*;

@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@Inherited
public @interface Dbinfo {
    String url();
    String drivername();
    String username();
    String password();
}
