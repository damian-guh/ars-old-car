import {
  Admin,
  Resource,
  List,
  Datagrid,
  TextField,
  DateField,
  TextInput,
  Create,
  SimpleForm,
  NumberInput,
  NumberField,
  DateTimeInput,
} from 'react-admin';
import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
} from 'react-admin-firebase';
import { firebaseConfig } from '../../../firebase';

const options = {};

const authProvider = FirebaseAuthProvider(firebaseConfig, options);
const dataProvider = FirebaseDataProvider(firebaseConfig);

const reservationFilters = [<TextInput source='date' />];

const ReservationsList = (props: any) => (
  <List {...props} filters={reservationFilters}>
    <Datagrid>
      <TextField label='ID' source='id' />
      <TextField label='Imię' source='name' />
      <TextField label='Nazwisko' source='lastname' />
      <TextField label='email' source='email' />
      <TextField label='Telefon' source='phoneNumber' />
      <TextField label='Liczba dorosłych' source='adultAmount' />
      <TextField label='Liczba dzieci' source='childrenAmount' />
      <TextField label='Data' source='date' />
      <TextField label='Godzina' source='time' />
    </Datagrid>
  </List>
);

const ReservationDatesList = (props: any) => (
  <List {...props} filters={reservationFilters}>
    <Datagrid>
      <TextField label='ID' source='id' />
      <NumberField label='Ilość osób' source='peopleAmount' />
      <DateField label='Data' source='date' showTime locales='pl-PL' />
    </Datagrid>
  </List>
);

const ReservationDateCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <NumberInput placeholder='Ilość osób' source='peopleAmount' />
      <DateTimeInput placeholder='Data' source='date' />
    </SimpleForm>
  </Create>
);

const AdminPanel = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name='reservations' list={ReservationsList} />
    <Resource
      name='reservation-dates'
      list={ReservationDatesList}
      create={ReservationDateCreate}
    />
  </Admin>
);

export default AdminPanel;
