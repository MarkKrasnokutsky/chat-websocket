package com.mark.chat_websocket.service;

import org.springframework.stereotype.Service;

import java.security.SecureRandom;

@Service
public class ChatService {
    private static final String CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    private static final SecureRandom random = new SecureRandom();

    private static String generateRandomCode(String data) {
        StringBuilder res = new StringBuilder();
        for (int i = 0; i < data.length(); i++) {
            int index = random.nextInt(CHARACTERS.length());
            res.append(CHARACTERS.charAt(index));
        }
        return res.toString();
    }
}
