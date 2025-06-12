namespace INC;


context EMP {
    @cds.persistence.exists

    entity INCIDENTDETAILS(){
        KEY ID : Integer;
        NAME : String(100);
        CITY : String(100);
        ISDEL : String(1);
        
    }
}
