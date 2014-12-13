package com.justinrmiller.bootreact.controllers;

import com.justinrmiller.bootreact.pojos.Comment;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;
import java.util.List;

/**
 * @author Justin Miller (Copyright 2014)
 */
@RestController
public class Comments {
    private static Logger log = LoggerFactory.getLogger(Comments.class);

    private static List<Comment> COMMENTS = new LinkedList<Comment>();

    @RequestMapping(
            value = "/comment",
            method = RequestMethod.GET,
            produces = "application/json; charset=utf-8")
    @ResponseBody
    public List<Comment> get() {
        log.info("Getting all comments");
        return COMMENTS;
    }

    @RequestMapping(
            value = "/comment",
            method = RequestMethod.POST,
            produces = "application/json")
    @ResponseBody
    public List<Comment> post(@RequestBody Comment comment) {
        log.info("Comment {}", comment);
        COMMENTS.add(comment);
        return COMMENTS;
    }
}
