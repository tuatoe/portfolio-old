
var contactModal = $('.contact-modal'),
    contactModalTrigger = $('.open-contact-modal'),
   
    manlyCollectionModel = $('.manly-collection-modal'),
    manlyCollectionModalTrigger = $('.open-manly-collection-modal'),
    
    dennisKirkModel = $('.dennis-kirk-modal'),
    dennisKirkModalTrigger = $('.open-dennis-kirk-modal'),
    
    scotchliteModel = $('.scotchlite-modal'),
    scotchliteModalTrigger = $('.open-scotchlite-modal'),
    
    homeEnergyModel = $('.home-energy-modal'),
    homeEnergyModalTrigger = $('.open-home-energy-modal'),
    
    spicyJayModel = $('.spicy-jay-modal'),
    spicyJayModalTrigger = $('.open-spicy-jay-modal'),
    
    greaterLiberiaConstructionModel = $('.greater-liberia-construction-modal'),
    greaterLiberiaConstructionModalTrigger = $('.open-greater-liberia-construction-modal'),
    
    dirtyDianaModel = $('.dirty-diana-modal'),
    dirtyDianaModalTrigger = $('.open-dirty-diana-modal'),
    
    panzsirModel = $('.panzsir-modal'),
    panzsirModalTrigger = $('.open-panzsir-modal'),
    
    powerInDiversityModel = $('.power-in-diversity-modal'),
    powerInDiversityModalTrigger = $('.open-power-in-diversity-modal'),
    
    logosModel = $('.logos-modal'),
    logosModalTrigger = $('.open-logos-modal'),
    
    printsModel = $('.prints-modal'),
    printsModalTrigger = $('.open-prints-modal'),
    
    closeModalBtn = $('.close-modal');


var modals = {
    allModals : function(modal, modalTrigger){
          $(modalTrigger,this).on('click',function(){
            $(modal,this).addClass('modal-is-visible');
            return false;
        })
    },
    
    closeModal : function(){
        closeModalBtn.on('click',function(){
            $(this).closest('.modal').removeClass('modal-is-visible');
        });
    }
}

modals.allModals(contactModal, contactModalTrigger);
modals.allModals(manlyCollectionModel, manlyCollectionModalTrigger);
modals.allModals(dennisKirkModel, dennisKirkModalTrigger);
modals.allModals(scotchliteModel, scotchliteModalTrigger);
modals.allModals(homeEnergyModel, homeEnergyModalTrigger);
modals.allModals(spicyJayModel, spicyJayModalTrigger);
modals.allModals(greaterLiberiaConstructionModel, greaterLiberiaConstructionModalTrigger);
modals.allModals(dirtyDianaModel, dirtyDianaModalTrigger);
modals.allModals(panzsirModel, panzsirModalTrigger);

modals.allModals(powerInDiversityModel, powerInDiversityModalTrigger);
modals.allModals(logosModel, logosModalTrigger);
modals.allModals(printsModel, printsModalTrigger);

modals.closeModal();
