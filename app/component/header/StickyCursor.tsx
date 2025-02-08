'use client';
import { useEffect, useState, useRef } from 'react';
import styles from './sticky.module.scss';
import { motion, useMotionValue, useSpring, transform, animate } from 'framer-motion';

export default function StickyCursor({stickyElement}:any) {

  const [isHovered, setIsHovered] = useState(false);
  const cursor = useRef(null);
  const cursorSize = isHovered ? 155 : 15;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1)
  }

  //Smooth out the mouse values
  const smoothOptions = {damping: 60, stiffness: 300, mass: 0.5}
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  }

  const rotate = (distance:any) => {
    const angle = Math.atan2(distance.y, distance.x);
    animate(cursor.current, { rotate: `${angle}rad` }, {duration: 0})
  }

  const manageMouseMove = (e:any) => {
    const { clientX, clientY } = e;
    const { left, top, height, width } = stickyElement?.current?.getBoundingClientRect() || 0;

    //center position of the stickyElement
    const center = {x: left + width / 2, y: top + height / 2}

    if(isHovered){

      //distance between the mouse pointer and the center of the custom cursor and 
      const distance = {x: clientX - center.x, y: clientY - center.y}
      
      //rotate
      rotate(distance)

      //stretch based on the distance
      const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));
      const newScaleX = transform(absDistance, [0, height/19], [1, 0.5])
      const newScaleY = transform(absDistance, [0, width/19], [1, 0.5])
      scale.x.set(newScaleX);
      scale.y.set(newScaleY);
      
      //move mouse to center of stickyElement + slightly move it towards the mouse pointer
      mouse.x.set((center.x - cursorSize / 2) + (distance.x * 0.5));
      mouse.y.set((center.y - cursorSize / 2) + (distance.y * 0.5));
    }
    else{
      //move custom cursor to center of stickyElement
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    }
  }

  const manageMouseOver = (e:any) => {
    setIsHovered(true)
  }

  const manageMouseLeave = (e:any) => {
    setIsHovered(false)
    animate(cursor.current, { scaleX: 1, scaleY: 1 }, {duration: 0.1})
  }

  useEffect( () => {
    stickyElement?.current?.addEventListener("mouseenter", manageMouseOver)
    stickyElement?.current?.addEventListener("mouseleave", manageMouseLeave)
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      stickyElement?.current?.removeEventListener("mouseenter", manageMouseOver)
      stickyElement?.current?.removeEventListener("mouseleave", manageMouseLeave)
      window.removeEventListener("mousemove", manageMouseMove)
    }
  }, [isHovered])

  const template = ({rotate, scaleX, scaleY}:any) => {
    return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})` 
  }

  return (
    <div className={styles.cursorContainer}>
      <motion.div 
        transformTemplate={template}
        style={{
          left: smoothMouse.x, 
          top: smoothMouse.y,
          scaleX: scale.x,
          scaleY: scale.y,
        }} 
        animate={{
          width: cursorSize,
          height: cursorSize
        }}
        className={styles.cursor}
        ref={cursor}>
      </motion.div>
    </div>
  )
}