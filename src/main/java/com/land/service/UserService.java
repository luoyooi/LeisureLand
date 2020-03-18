package com.land.service;

import com.land.beans.User;
import com.land.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author shkstart
 * @create 2020-03-01 17:42
 */
@Service
public class UserService {

    @Autowired
    private UserMapper userMapper;

    public User getUser(String username) {
        return userMapper.selectUserByName(username);
    }
}
