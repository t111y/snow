package top.yaovan.aop;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.scheduling.annotation.EnableScheduling;

@Configuration
@EnableAspectJAutoProxy
@ComponentScan(basePackages = {"top.yaovan.aop"})
@EnableScheduling
public class AopAppContext {

}
