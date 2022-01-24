/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components/macro';
import { Transition } from 'react-spring/renderprops';
import ModalContainer from '../../../components/shared/ModalContainer';
import { Loader, Icon } from 'semantic-ui-react';
import CustomButton from '../../../components/shared/CustomButton';
import GameEditionModalsContainer from '../../game-edition-v2/GameEditionModalsContainer';
import { GameEditionContext } from '../../../contexts/GameEditionContext';
import { WalletContext } from '../../../contexts/WalletContext';
import { WALLET } from '../../../constants/wallet';
import { openZelcore } from '../../../utils/zelcore';
import { theme } from '../../../styles/theme';
import { LightModeContext } from '../../../contexts/LightModeContext';
import GameEditionLabel from '../../game-edition-v2/components/GameEditionLabel';
import Label from '../../shared/Label';

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 385px;
  width: 100%;
  z-index: 5;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  justify-content: space-between;
`;

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 15px;
`;

const ContentContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const WalletRequestView = ({ show, onClose, error }) => {
  const wallet = useContext(WalletContext);
  const { themeMode } = useContext(LightModeContext);

  useEffect(() => {
    if (show && wallet.wallet.name === WALLET.ZELCORE.name) {
      openZelcore();
    }
  }, [show]);

  const { gameEditionView } = useContext(GameEditionContext);

  return gameEditionView && show ? (
    <GameEditionModalsContainer
      modalStyle={{ zIndex: 1 }}
      title={error?.error ? error.title : 'Please Sign'}
      onClose={onClose}
      content={
        error?.error ? (
          <ContentContainer>
            <Content>
              <GameEditionLabel color="yellow">{error?.content}</GameEditionLabel>
            </Content>
            <CustomButton
              geType="confirm"
              onClick={() => {
                onClose();
              }}
            />
          </ContentContainer>
        ) : (
          <Content>
            <GameEditionLabel center color="yellow">
              Follow instructions in the wallet to preview and sign your transaction.
            </GameEditionLabel>
            <LoaderContainer>
              <Loader
                active
                inline="centered"
                style={{
                  color: theme(themeMode).colors.black,
                }}
              ></Loader>
            </LoaderContainer>
          </Content>
        )
      }
    />
  ) : (
    <Transition items={show} from={{ opacity: 0 }} enter={{ opacity: 1 }} leave={{ opacity: 0 }}>
      {(show) =>
        show &&
        ((props) => (
          <Container style={props}>
            {error?.error ? (
              <ModalContainer
                title={error?.title}
                containerStyle={{
                  maxHeight: '80vh',
                  maxWidth: '90vw',
                }}
                onClose={onClose}
              >
                <Content style={{ marginBottom: 30, marginTop: 24 }}>
                  <Label>{error?.content}</Label>
                </Content>
                <CustomButton
                  onClick={() => {
                    onClose();
                  }}
                >
                  <Icon name="checkmark" /> Got it
                </CustomButton>
              </ModalContainer>
            ) : (
              <ModalContainer
                title="Please Sign"
                containerStyle={{
                  maxHeight: '80vh',
                  maxWidth: '90vw',
                }}
                onClose={onClose}
              >
                <Content style={{ marginTop: 16 }}>
                  <Label style={{ textAlign: 'center' }}>Follow instructions in the wallet to preview and sign your transaction.</Label>
                  <LoaderContainer>
                    <Loader active inline="centered" style={{ color: theme(themeMode).colors.white }}></Loader>
                  </LoaderContainer>
                </Content>
              </ModalContainer>
            )}
          </Container>
        ))
      }
    </Transition>
  );
};

export default WalletRequestView;
