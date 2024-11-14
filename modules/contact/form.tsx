import { Button } from '@components/common-button';
import { contactPageData } from '@data';
import { useEasyGoogleForm } from '@hymns-of-web/use-easy-google-form';
import {
  buttonStyles,
  CommonFormItemContainer,
  FormContainer,
} from '@modules/contact/styles';
import { useRef } from 'react';
import { toast } from 'react-toastify';

interface MyCustomGFormProps {
  className?: string;
}

const { successMsg } = contactPageData;

const MyCustomGForm = ({ className }: MyCustomGFormProps) => {
  const ref = useRef<HTMLFormElement>(null);
  const onSubmitExtra = () => {
    toast.success(successMsg);
    ref.current?.reset();
  };
  const onSubmit = useEasyGoogleForm({
    formRef: ref,
    gFormId: '1BJwakZ1SNga7f8i7GakaBtGtPzQOJyNyHC-PhUANwnY',
    onSubmitExtra,
    links: [
      {
        entryId: 'entry.1681583540',
        formId: 'HBigI',
        type: 'text',
      },
      {
        entryId: 'entry.1977170944',
        formId: 'iErXj',
        type: 'text',
      },
      {
        entryId: 'entry.770184723',
        formId: 'wEYBq',
        type: 'text',
      },
      {
        entryId: 'entry.1174315995',
        formId: 'GRFJe',
        type: 'text',
      },
      {
        entryId: 'entry.852914498',
        formId: 'RJmJ_',
        type: 'textarea',
      },
    ],
  });
  return (
    <FormContainer onSubmit={onSubmit} ref={ref} className={className}>
      <CommonFormItemContainer>
        <label htmlFor="HBigI">Full Name</label>
        <input type="text" id="HBigI" required placeholder="Full Name" />
      </CommonFormItemContainer>
      <CommonFormItemContainer>
        <label htmlFor="iErXj">Email Address</label>
        <input type="email" id="iErXj" required placeholder="Email" />
      </CommonFormItemContainer>
      <CommonFormItemContainer>
        <label htmlFor="wEYBq">Contact Number</label>
        <input type="tel" id="wEYBq" required placeholder="+91 99999 99999" />
      </CommonFormItemContainer>
      <CommonFormItemContainer>
        <label htmlFor="GRFJe">Business/Company Name (Optional)</label>
        <input type="text" id="GRFJe" placeholder="Business/Company Name " />
      </CommonFormItemContainer>
      <CommonFormItemContainer className="long-item">
        <label htmlFor="RJmJ_">Message (Optional)</label>
        <textarea id="RJmJ_" placeholder="Enter your query" />
      </CommonFormItemContainer>
      <Button type="submit" css={buttonStyles}>
        Book a demo
      </Button>
    </FormContainer>
  );
};

export default MyCustomGForm;
