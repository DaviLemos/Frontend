import React, { useEffect } from "react";
//REDUX
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../../store/actions";
//CoreUI
import { CButton } from "@coreui/react";
//Componets
import ShowVideos from "../containers/showVideos";
//Style

const Library = ({ history }) => {
  const handleClick = () => {
    history.push("/playlist");
  };
  useEffect(() => {
    console.log("oi");
  }, []);
  return (
    <div>
      <h1>Biblioteca</h1>
      <CButton onClick={() => handleClick()}>Playlist</CButton>
      <h4>Histórico</h4>
      <ShowVideos />
      <h4>Assistir mais tarde</h4>
      <ShowVideos />
      <h4>Playlists</h4>
      <ShowVideos />
      <h4>Vídeos marcados com "gostei"</h4>
      <ShowVideos />
    </div>
  );
};

const mapStateToProps = (state) => ({ user: state.user });
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Library);
