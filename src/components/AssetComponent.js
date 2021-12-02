import {Avatar} from "@mui/material";

const AssetComponent = ({asset}) => {
    return (
        <div>
            <Avatar
                title={asset.token_id}
                alt={asset.token_id}
                src={asset.image_url}
                sx={{ width: 50, height: 50 }}
            />

        </div>
    )
}

export default AssetComponent;
