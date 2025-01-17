package com.freuse.freuse.filter;

import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import jakarta.servlet.ServletException;
import java.io.IOException;

@Component
@Slf4j
public class RequestResponseLoggingFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;
        HttpServletResponse res = (HttpServletResponse) response;
        log.info("Request --> {} {}", req.getMethod(), req.getRequestURI());
        chain.doFilter(request, response);
        log.info("Response --> {}", res.getStatus());
    }
}