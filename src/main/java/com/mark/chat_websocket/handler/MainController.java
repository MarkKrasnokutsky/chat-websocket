package com.mark.chat_websocket.handler;

import com.mark.chat_websocket.service.ChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
@RequiredArgsConstructor
public class MainController {

    private final ChatService chatService;

    @MessageMapping("/chat")
    @SendTo("/topic/messages")
    public String sendMessage(String message) {
        return "{\"response\" : \"" + chatService.answerMessage(message) + "\"}";
    }

}
