using INC as INC from '../db/schema';

service Incident {
    entity IncDet as select from INC.EMP.INCIDENTDETAILS;
}