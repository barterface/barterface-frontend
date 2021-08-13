import React, { useEffect, useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./RequestModal.module.css";
import * as requestAction from "../../store/action/requestAction";
import { MdClose } from "react-icons/md";
import { useSpring, animated } from "react-spring";
import {
  Modal,
  Button,
  VStack,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Input,
  Select,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  HStack,
  Image,
  useToast,
} from "@chakra-ui/react";

const RequestModal = ({
  requestModal,
  setRequestModal,
  uploadId,
  isOpen,
  onOpen,
  onClose,
}) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { userId, name } = useSelector((state) => state.auth);
  //const req = useSelector(state => state.request.availableRequest)
  const requesterAccId = "12345";
  const requesterAccPass = "ankur";
  const requesterAccName = "ankurflix";

  const [platformName, setPlatformName] = useState("");
  const [platformId, setPlatformId] = useState("");
  const [platformPassword, setPlatformPassword] = useState("");
  const requestHandler = (e) => {
    e.preventDefault();
    console.log("requestHandler chala");

    dispatch(
      requestAction.addRequest(
        requesterAccId,
        requesterAccName,
        requesterAccPass,
        userId,
        uploadId,
        name
      )
    );
    onClose();
    toast({
      title: "Request Sent.",
      description: "You've successfully sent request.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    console.log("requestHandler Hogya");
  };

  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: requestModal ? 1 : 0,
    transform: requestModal ? `translateY(0%)` : `translateY(-100%)`,
  });
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setRequestModal((prev) => !prev);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && requestModal) {
        setRequestModal((prev) => !prev);
        console.log("I pressed");
      }
    },
    [setRequestModal, requestModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Request</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack>
            <Select
              value={platformName}
              onChange={(event) => setPlatformName(event.currentTarget.value)}
            >
              <option defaultValue="none">Select a Platform</option>
              <option value="Netflix">Netflix</option>
              <option value="Amazon Prime">Amazon Prime</option>
              <option value="SonyLiv">SonyLiv</option>
              <option value="Hotstar">Hotstar</option>
            </Select>
            <Input
              type="text"
              placeholder="Platform Id"
              name="email"
              value={platformId}
              onChange={(event) => setPlatformId(event.target.value)}
            />
            <Input
              type="password"
              placeholder="Platform Password"
              name="platformPassword"
              value={platformPassword}
              onChange={(event) => setPlatformPassword(event.target.value)}
            />
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button variant="solid" colorScheme="red" onClick={requestHandler}>
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    // ?? (
    //   <>
    //     {requestModal ? (
    //       <div
    //         className={classes.Background}
    //         onClick={closeModal}
    //         ref={modalRef}
    //       >
    //         <animated.div style={animation}>
    //           <div className={classes.ModalWrapper}>
    //             <img
    //               src="images/modalImage.jpg"
    //               alt="camera"
    //               className={classes.ModalImage}
    //             ></img>
    //             <div className={classes.ModalContent}>
    //               <form onSubmit={requestHandler}>
    //                 <div className={classes.Form}>
    //                   <select
    //                     className={classes.FormInput}
    //                     value={platformName}
    //                     onChange={(event) =>
    //                       setPlatformName(event.currentTarget.value)
    //                     }
    //                   >
    //                     <option defaultValue="none">Select a Platform</option>
    //                     <option value="Netflix">Netflix</option>
    //                     <option value="Amazon Prime">Amazon Prime</option>
    //                     <option value="SonyLiv">SonyLiv</option>
    //                     <option value="Hotstar">Hotstar</option>
    //                   </select>
    //                   <input
    //                     type="text"
    //                     placeholder="Platform Id"
    //                     name="email"
    //                     value={platformId}
    //                     onChange={(event) => setPlatformId(event.target.value)}
    //                     className={classes.FormInput}
    //                   />
    //                   <input
    //                     type="password"
    //                     placeholder="Platform Password"
    //                     name="platformPassword"
    //                     value={platformPassword}
    //                     onChange={(event) =>
    //                       setPlatformPassword(event.target.value)
    //                     }
    //                     className={classes.FormInput}
    //                   />
    //                   <Button buttonColor="red" buttonStyle="btnPrimary">
    //                     Send Request
    //                   </Button>
    //                 </div>
    //               </form>
    //             </div>
    //             <MdClose
    //               className={classes.ClosedModalButton}
    //               aria-label="Close modal"
    //               onClick={() => setRequestModal((prev) => !prev)}
    //             />
    //           </div>
    //         </animated.div>
    //       </div>
    //     ) : null}
    //   </>
    // )
  );
};

export default RequestModal;
