package top.yaovan.mysql;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class ParseAnnotation {
    public void parseMethod(Class clazz) throws InstantiationException, IllegalAccessException, InvocationTargetException {
        Object obj= clazz.getInterfaces();
        Method[] methods = clazz.getMethods();
        for (Method m:methods){
            Dbinfo db = m.getAnnotation(Dbinfo.class);
            String url = "";
            String drivername="";
            String username="";
            String password="";
            if(db!=null){
                url = db.url();
                drivername = db.drivername();
                username = db.username();
                password = db.password();
                m.invoke(obj,url,drivername,username,password);
            }
        }
    }
}
