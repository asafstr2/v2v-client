import { makeStyles } from '@material-ui/styles'
import React, { useEffect, useState } from 'react'
import { ReactComponent as Media } from '../assets/BubblePageMedia.svg'
import {Button} from '@material-ui/core'
import { addUserToBubbele,addMentorToBubbele } from '../redux/actions/bubbeles'
import { useDispatch, useSelector } from 'react-redux'
import  SimpleModal  from '../component/modal/simple-modal'
import { useParams } from 'react-router'
import { apiCall } from '../services/api'
import { addError } from '../redux/actions/error'

const useStyles = makeStyles(theme=>({
    root:{
        display:'flex',
        justifyContent:'space-around',
        top: 100,
        position: 'relative'
    },
    media:{
    },
    content:{
        flex:.5,
        textAlign:'left',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        '& > p':{
            lineHeight:'40px'
        }

    },
    buttonContainer:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',

        '& > button':{
            marginRight:8

        }
    },
    modal:{
        background:'white',
         width:400, 
         position:'absolute', 
         top:'50%', 
         left:'50%', 
         height:500, 
         transform:'translate(-50%, -50%)',
         padding:30,
         borderRadius:10
    }
}))
export default function BubblePage({title, desc}){
    const classes = useStyles()
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [currentBubble, setCurrentBubble] = useState(null)
    const {id} = useParams()
    const uid = useSelector(state=>state.currentUser.user.id)


  useEffect(()=>{
        apiCall('get', `/api/users/${uid}/bubbele/${id}`)
        .then(res=>{
            console.log(res)
            setCurrentBubble(res)
        })
        .catch(err=>dispatch(addError('Couldt get bubble. try again later')))
  },[])

    const buttonProps = {
        color:'secondary',
        variant:'outlined',
    }

    function handleMentee(){
        dispatch(addUserToBubbele(id))
    }

    function handleMentor(){}
        // open mentor modal
        // dispatch(addMentorToBubbele(id))

    const modalBody = (
        <div className={classes.modal} style={{}}>
            <h2>Be a mentor - set learning session</h2>
            <h2>Learning session name</h2>
            <h2>List of attendees: 
                 <ul>
                 {currentBubble ? currentBubble.usersAttending.map(user=><li key={user._id}>{user.username}</li>) : 'N/A'}
                </ul>
            </h2>
        </div>
    )
    return (
        <div className={classes.root}>
            <Media className={classes.media}/>
            <div className={classes.content}>
                <h1>I wonder how the BI team builds those fancy dashboards in Amplitude</h1>
                <p>
                    Understand how Amplitude analytics works and how it's used for visualizing KPIs and user flows
                    Being able to answer basic data questions that are relevant to your team by yourselves, using amplitude
                    Being able to edit and manipulate Amplitude reports that are being shared with you
                    Creating a dashboard of basic KPIs for your team.
                </p>
                <div className={classes.buttonContainer}>
                    <Button onClick={handleMentee} {...buttonProps}>Join as Mentee</Button>
                    <Button onClick={()=>setOpen(true)} {...buttonProps}>I want to teach this!</Button>
                </div>
            </div> 
            <SimpleModal body={modalBody} open={open} setOpen={setOpen}/>
        </div>
    )
}