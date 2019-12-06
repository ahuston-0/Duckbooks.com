

window.onload = () =>{
    document.getElementById("downloadjs").addEventListener("click", dl);
}

function dl(event){
    let filename = window.location.pathname.split('/').pop();
    let path = window.location.pathname.split('/').slice(0,-1).join('/');
    let filepaths = {
        "AtkinsPhysicalChemistry.html":"Physical Chemistry (8th ed - Atkins).pdf",
        "BuildingJavaPrograms.html":"Building Java Programs (2nd ed - Reges, Stepp).pdf",
        "ChemicalThermodynamicsOfMaterials.html":"Chemical Thermodynamics of Materials (Svein Stolen Tor Grande).pdf",
        "DiscreteMathematicsWithApplications.html":"Discrete Mathematics with Applications (4th ed - Epp)(1).pdf",
        "ModernControlEngineering.html":"Modern Control Engineering (5th ed - Ogata).pdf",
        "ProbabilityAndStatistics.html":"Probability & Statistics for Engineering and the Sciences (7th ed - Devore).pdf"
    };
    open(path+"/"+filepaths[filename]);
}
