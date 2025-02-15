"use client";

import React, { useRef, useEffect } from "react";
import Matter from "matter-js";

const Gravity = () => {
  const canvasRef = useRef(null);
  const boxRef: any = useRef(null);

  useEffect(() => {
    // module aliases
    var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite;

    // create an engine
    var engine = Engine.create();

    // create a renderer
    var render = Render.create({
      element: boxRef.current,
      engine: engine,
        options: {
            width: 1200,
            height: 400,
            wireframeBackground: "transparent"
        }
    });

    // create two boxes and a ground
    var boxA = Bodies.rectangle(400, 200, 80, 80);
    var boxB = Bodies.rectangle(450, 50, 80, 80, {
        render: {
            fillStyle: "fill",
            opacity: 1
        }
    });
    var ground = Bodies.rectangle(400, 610, 810, 80, { isStatic: true });

    // add all of the bodies to the world
    Composite.add(engine.world, [boxA, boxB, ground]);

    // run the renderer
    Render.run(render);

    // create runner
    var runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);
  }, []);

  return <div style={{ background: "transparent" }} ref={boxRef}></div>;
};

export default Gravity;
