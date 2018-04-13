package top.yaovan.aop;

public interface PersonServer {

    void save(String name);
    void update(String name, Integer id);
    String getPersonName(Integer id) throws Exception;

}