import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import styles from './styles.module.css'
import { Paper, Avatar, Divider, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import theme from '../src/theme'
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

export default function Card(prop) {
    let divi = prop.side == "l" ? 3 : 2
    let divider = prop.side == "l" ? 30 : 20
    const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / divi) / divider, 1.05]
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
    const matches = useMediaQuery('(min-width:600px)');
    const matchesIpad = useMediaQuery('(min-width:1025px)');
    const classes = useStyles()
    const [props, set] = useSpring(() => ({ xys: [0.5, -1, 1], config: { mass: 15, tension: 700, friction: 50 } }))
    return (
        <div>
            <Container style={{ padding: 20, width: "100%" }}>
                <animated.div
                    class="card"
                    onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                    onMouseLeave={() => set({ xys: [0, 0, 1] })}
                    style={{ transform: props.xys.interpolate(trans) }}
                >
                    <div elevation={2} square={true} className={styles.card} >
                        <div style={{padding:"10px"}}>
                            <Typography color="primary" style={{ marginBottom: 10, fontSize: 15 }}>
                                <span style={{ fontSize: 22 }}>&#8220;</span> Review is an evaluation of a publication, service, or company such as a movie, video game, musical composition, book; a piece of hardware like a car, home appliance, or computer <span style={{ fontSize: 22 }}>&#8221;</span>
                            </Typography>
                            <Typography variant="h6" color="primary" style={{ textAlign: "end" }}>
                                - Anuswant Pandey,Developer,CBNITS
                            </Typography>
                        </div>
                    </div>
                </animated.div>
            </Container>
        </div>
    )
}