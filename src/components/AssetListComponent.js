import AssetComponent from "./AssetComponent";
import {Grid} from "@mui/material";


const AssetListComponent = ({assets})=>{
    return(
        <Grid container spacing={2}>
            {assets && assets.map((asset,index)=>{
                return (
                    <Grid item xs={2}>
                        <AssetComponent asset={asset} key={index}/>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default AssetListComponent;
