namespace INC;


context EMP {
    @cds.persistence.exists

    entity INCIDENTDETAILS(){
        KEY ID : Integer;
        NAME : String(100);
    }
}
