export { addContact, getContact } from './contactUs';

export { getFlatsUsers } from './flatsUsers';
export {
  getAnnouncement, postAnnouncement, getAnnouncementById, putAnnouncement, deleteAnnouncement,
} from './announcements';

export { getAllBills, sendBillMessage, payBill } from './Bills';
export {
  getFlats, flatById, updateFlat, availableFlats,
} from './flats';

export {
  getServices, postServices, updateServices, getServiceById,
} from './services';
export { login, logout } from './auth';
export {
  addComplaints, deleteSingleComplaint, getAllComplaints, getSingleComplaint,
} from './complaints';
export { addUser, getUsers, profile } from './users';
export { default as adminStatistics } from './Statistics';
export { getUsersBills } from './billUser';
export { allUserPayments } from './payments';
export {
  getAdvertisements, adddAdve, updateAdv, deleteAdv, getAdvById,
} from './advertisements';
