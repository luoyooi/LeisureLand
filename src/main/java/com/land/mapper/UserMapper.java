package com.land.mapper;

import com.land.beans.User;
import org.springframework.stereotype.Repository;

/**
 * @author shkstart
 * @create 2020-03-01 17:41
 */
@Repository
public interface UserMapper {
    public User selectUserByName(String username);
}
