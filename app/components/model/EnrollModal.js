import React from "react";
import {PiStudentDuotone} from 'react-icons/pi'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";


export default function EnrollModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

 const [backdrop, setBackdrop] = React.useState("blur");
  return (
    <>
      <Button className="bg-primary text-md font-semibold shadow-xl shadow-slate-200 dark:shadow-slate-900" onPress={onOpen} color="secondary" size="md">
      <PiStudentDuotone className="text-xl"/>
      Student Admit 
      </Button>
      <Modal backdrop={backdrop} isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center" size='4xl' isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Fill Up All the form</ModalHeader>
              <ModalBody className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-7">
              <Input size="sm" variant="bordered" type="email" label="Email" />
              <Input size="sm" variant="bordered" type="email" label="Email" />
              <Input size="sm" variant="bordered" type="email" label="Email" />
              <Input size="sm" variant="bordered" type="email" label="Email" />
              <Input size="sm" variant="bordered" type="email" label="Email" />
              <Input size="sm" variant="bordered" type="email" label="Email" />
               
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

