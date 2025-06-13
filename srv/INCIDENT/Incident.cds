using INC as INC from '../../db/schema';
using {OpenObject} from '../utils/helper';

service Incident {
    entity IncDet as select from INC.EMP.INCIDENTDETAILS;

//  post

    action insertIncident(asdfghjklmnbvcx:String) returns String;      // when return value in form of String
    // action insertIncident(asdfghjklmnbvcx:String) returns OpenObject;      // when return value in form of object

}