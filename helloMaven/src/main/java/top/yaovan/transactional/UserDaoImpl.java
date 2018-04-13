package top.yaovan.transactional;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Repository
public class UserDaoImpl implements UserDao {

    @Override
    @Transactional(propagation = Propagation.REQUIRED,rollbackForClassName = "Exception")
    public void addUser(User user) {
        throw new RuntimeException("");
    }

    @Override
    @Transactional(readOnly = true)
    public List<User> showUsers() {
        return null;
    }


}
