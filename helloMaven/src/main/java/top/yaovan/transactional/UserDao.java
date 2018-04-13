package top.yaovan.transactional;

import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface UserDao {
    void addUser(User user);
    List<User> showUsers();
}
